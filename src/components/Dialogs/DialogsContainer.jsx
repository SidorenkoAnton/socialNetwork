
import { connect } from 'react-redux'
import { updateNewMassageBodyCreator, sendMassageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'



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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer