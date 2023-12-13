import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img alt='logo' src={Logo}/>
                <p className='my-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa velit explicabo repudiandae quaerat. 
                    Velit sequi molestiae optio ab perspiciatis architecto odio sapiente, et incidunt porro est in, repellat a. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Massa orci senectus</p>
                <p className='my-5'>Et gravid id et etiame</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Tempus metus mattis risus volutpat</p>
                <p>(00) 11 92233-4455</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer