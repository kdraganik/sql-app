import Form from '@/components/Form';

export default function LoginView({checkPassword, error}) {
    return (
        <>
            <h1>Login</h1>
            <Form checkPassword={checkPassword} error={error}></Form>
        </>
    );
}