import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
  ],
  // callbacks: {
  //   async singIn({ account, user, profile }) {
  //     const isAllowedToSignIn = true;
  //     if (isAllowedToSignIn) {
  //       return true;
  //     } else {
  //       return false;
  //       // Or you can return a URL to redirect to:
  //       // return '/unauthorized'
  //     }
  //   },
  //   async redirect({ url, baseUrl }) {
  //     if (url.startWith("/")) {
  //       return `${baseUrl}${url}`;
  //     } else if (new URL(url).origin === baseUrl) {
  //       return url;
  //     }
  //     return baseUrl;
  //   },
  //   async session({ session, user, token }) {
  //     session.accessToken = token.accessToken;
  //     session.user.id = token.id;
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.id = profile.id;
  //     }
  //     return token;
  //   },
  // },
};
