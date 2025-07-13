import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    }}>
      <SignUp />
    </div>
  );
}