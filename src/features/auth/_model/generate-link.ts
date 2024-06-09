export const generateLink = ({ token, email }: { token: string; email: string }) => {
  const url = new URL(`${window.location.origin}/api/login`)
  url.searchParams.set('token', token)
  url.searchParams.set('email', email)
  return url.toString()
}
