import './register.css'

export default function Register() {
  return (
    <div className='register' style={{background: 'url(' + "assets/images/login-background.png" + ')'}}>
        <div className='register-wrap center-box'>
            <div className='register-form'>
                <h3 className='register-title'>
                    Đăng ký
                </h3>
                <div className='register-form-group'>
                    <input type="text" className="register-input" id="register-input" placeholder="Tài khoản" />
                    <input type="text" className="register-input" id="register-input" placeholder="Họ và tên" />
                    <div className='register-form-inline'>
                        <input type="text" className="register-input col-6" id="register-input" placeholder="Năm sinh" />
                        <input type="text" className="register-input col-6" id="register-input" placeholder="Giới tính" />
                    </div>
                    <input type="text" className="register-input" id="register-input" placeholder="Điện thoại" />
                    <input type="text" className="register-input" id="register-input" placeholder="Email" />
                    <input type="text" className="register-input" id="register-input" placeholder="Địa chỉ" />
                    <input type="text" className="register-input" id="register-input" placeholder="Mật khẩu" />
                    <input type="text" className="register-input" id="register-input" placeholder="Nhập lại mật khẩu" />
                </div>
                <button type='submit' className='register-btn'>
                    Đăng ký
                </button>
                <a href='#' className='link-to text-center'> Đăng nhập </a>
            </div>
        </div>
    </div>
  )
}
