
import { connect } from 'react-redux'
import { sendMassage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import withRedirect from './../../hoc/withAuthRedirect'
import { compose } from 'redux'



const mapStateToProps = (state) => {
	return {
		dialogPage: state.dialogPage,

	}
}




export default compose(connect(mapStateToProps, { sendMassage }), withRedirect)(Dialogs)