import { Oval } from "react-loader-spinner"

export const LoaderSpinner = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#0062cc"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#0062cc"
        />
    </div>
  )
}
