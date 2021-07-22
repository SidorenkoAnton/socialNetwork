import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { sendMassage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import withRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import type { AppStateType } from './../../redux/redux-store'
import { InitialStateDialogsType, InitialStateMassagesType } from '../../redux/dialogs-reducer'

type MapStateToPropsType = {
	dialogs: Array<InitialStateDialogsType>
	massages: Array<InitialStateMassagesType>
}



const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		dialogs: state.dialogPage.dialogs,
		massages: state.dialogPage.massages
	}
}

const DialogContainer = (props: DialogsPropsFromReduxType) => {
	return (
		<Dialogs massages={props.massages} dialogs={props.dialogs} sendMassage={props.sendMassage} />
	)
}

const connector = connect(mapStateToProps, { sendMassage })
export type DialogsPropsFromReduxType = ConnectedProps<typeof connector>

export default compose(connector, withRedirect)(DialogContainer)
