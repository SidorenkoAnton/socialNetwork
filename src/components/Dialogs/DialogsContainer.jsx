
import { connect } from 'react-redux'
import { updateNewMassageBodyCreator, sendMassageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import withRedirect from './../../hoc/withAuthRedirect'
import { compose } from 'redux'



const mapStateToProps = (state) => {
	return {
		dialogPage: state.dialogPage,

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sandMassageClick: () => {
			dispatch(sendMassageCreator())
		},
		newMassageChange: (body) => {
			dispatch(updateNewMassageBodyCreator(body))
		},
	}

}



export default compose(connect(mapStateToProps, mapDispatchToProps), withRedirect)(Dialogs)