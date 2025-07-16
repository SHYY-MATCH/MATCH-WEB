interface LogoutProps {
  fillColor?: string;
}

const Login = ({ fillColor = "#454A52" }: LogoutProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM19.632 17.796C17.916 15.708 13.752 15 12 15C10.248 15 6.084 15.708 4.368 17.796C3.144 16.188 2.4 14.184 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 14.184 20.856 16.188 19.632 17.796ZM12 4.8C9.672 4.8 7.8 6.672 7.8 9C7.8 11.328 9.672 13.2 12 13.2C14.328 13.2 16.2 11.328 16.2 9C16.2 6.672 14.328 4.8 12 4.8Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Login;
