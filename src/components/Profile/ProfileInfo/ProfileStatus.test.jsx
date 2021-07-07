import React from 'react'
import TestRenderer, { act } from 'react-test-renderer'
import { compose } from 'redux'
import { updateStatus } from '../../../redux/profile-reducer'
import ProfileStatus from './ProfileStatus'

describe('test profileStatus page', () => {

	test('component shoult include <div>', () => {
		const component = TestRenderer.create(<ProfileStatus status='test-status' />);
		const testComponent = component.root
		expect(testComponent.props.status).toBe('test-status')
	})

	test('input shouldn`t displayed', () => {
		const component = TestRenderer.create(<ProfileStatus />)
		const root = component.root
		expect(() => {
			const input = root.findByType('input')
		}).toThrow()

	})
	test('input should be displayed in EditMode', () => {
		const component = TestRenderer.create(<ProfileStatus status='testStatus' updateStatus={updateStatus} />)
		const root = component.root
		let span = root.findByType('span')
		act(() => {
			span.props.onDoubleClick()
		})
		expect(() => {
			let input = root.findByType('input')
		}).not.toThrow()
	})

})