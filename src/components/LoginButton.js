import Button from 'react-bootstrap/Button';

export default function LoginButton() {
    return (
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg" href="http://localhost:3000/login">LOGIN</Button>
        </div>
    )
}