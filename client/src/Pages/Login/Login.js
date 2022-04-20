import './login.css'

export default function Login() {
  return (
    <div className='login' style={{background: 'url(' + "assets/images/login-background.png" + ')'}}>
        <div className='login-wrap center-box'>
            <div className='login-form'>
                <h3 className='login-title'>
                    Đăng nhập
                </h3>
                <div className='login-form-group'>
                    <input type="text" className="login-input" id="login-input" placeholder="Tài khoản" />
                    <input type="text" className="login-input" id="login-input" placeholder="Họ và tên" />
                </div>
                <button type='submit' className='login-btn'>
                    Đăng nhập
                </button>
                <a href='#' className='link-to text-center'
                style={{marginTop: '60px', color: '#b10606'}}
                > Bạn chưa có tài khoản? </a>
                <p> Hoặc đăng nhập với</p>
                <div className='login-ways row'>
                    <div className='login-way facebook-way col-4'>
                        <i className='fa fa-facebook login-way-icon' style={{background: 'blue'}}>
                        </i>
                    </div>
                    <div className='login-way twiter-way col-4'>
                        <i className='fa fa-twitter login-way-icon' style={{background: '#18baf9'}}>
                        </i>
                    </div>
                    <div className='login-way google-way col-4'>
                        <i className='fa fa-google login-way-icon' style={{background: '#aa1919'}}>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
