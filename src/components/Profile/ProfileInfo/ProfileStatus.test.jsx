import React from 'react'
import TestRenderer, { act } from 'react-test-renderer'
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

})