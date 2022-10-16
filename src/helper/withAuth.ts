// Next
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, PreviewData } from "next";

// Nookies
import { destroyCookie, parseCookies } from "nookies";

// Types
import type { ParsedUrlQuery } from "querystring";

// Api
import { validateToken } from "../pages/api/jwt/validate";

type ServerContext = GetServerSidePropsContext<ParsedUrlQuery, PreviewData>

export function withAuth(gssp: any) {
   
  return async (context: ServerContext) => {

    const { token, cacheAuth } = parseCookies(context);

    if (!token) {
      return {
        redirect: {
          destination: '/entrar'
        }
      };
    }
   
    const fiveMinutes = Number(Date.now() - (1000 * 60 * 5));
    if (cacheAuth && Number(cacheAuth) > fiveMinutes && token) {
      return {
        props: {}
      };
    }

    const user = await validateToken(token, context);
    if (user.error) {
      destroyCookie(context, "token");
      destroyCookie(context, "cacheAuth");
      return {
        redirect: {
          destination: '/entrar'
        }
      };
    }

    const gsspData = await gssp(context); // Run `getServerSideProps` to get page-specific data

    // Pass page-specific props along with user data from `withAuth` to component
    return {
      props: {
        ...gsspData.props,
      }
    };
  };
}