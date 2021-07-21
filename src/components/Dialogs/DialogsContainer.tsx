
import { connect } from 'react-redux'
import { sendMassage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import withRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import type { AppStateType } from './../../redux/redux-store'



const mapStateToProps = (state: AppStateType) => {
	return {
		dialogs: state.dialogPage.dialogs,
		massages: state.dialogPage.massages
	}
}




export default compose(connect(mapStateToProps, { sendMassage }), withRedirect)(Dialogs)