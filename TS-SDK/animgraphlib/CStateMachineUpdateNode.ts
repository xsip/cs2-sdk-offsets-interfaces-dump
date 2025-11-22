// generated - do not edit!

import {animgraphlib_CAnimUpdateNodeBase} from './CAnimUpdateNodeBase';
// Class size: 0x100
// BaseClass: : public CS2::animgraphlib::CAnimUpdateNodeBase
export const animgraphlib_CStateMachineUpdateNode  = {
	...animgraphlib_CAnimUpdateNodeBase,
	m_stateMachine: 112n, // animgraphlib::CAnimStateMachineUpdater  | Schema_DeclaredClass | Size: 0x58
	m_stateData: 200n, // GlobalTypes::CUtlVector<animgraphlib::CStateNodeStateData>  | Schema_Atomic | Size: 0x18
	m_transitionData: 224n, // GlobalTypes::CUtlVector<animgraphlib::CStateNodeTransitionData>  | Schema_Atomic | Size: 0x18
	m_bBlockWaningTags: 252n, // bool m_bBlockWaningTags; |  0xfc | Schema_Builtin | Size: 0x1
	m_bLockStateWhenWaning: 253n, // bool m_bLockStateWhenWaning; |  0xfd | Schema_Builtin | Size: 0x1
	m_bResetWhenActivated: 254n, // bool m_bResetWhenActivated; |  0xfe | Schema_Builtin | Size: 0x1
}
