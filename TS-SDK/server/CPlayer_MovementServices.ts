// generated - do not edit!

import {client_CPlayerPawnComponent} from '../client/CPlayerPawnComponent';
// Class size: 0x240
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const server_CPlayer_MovementServices  = {
	...client_CPlayerPawnComponent,
	m_nImpulse: 72n, // int32_t m_nImpulse; |  0x48 | Schema_Builtin | Size: 0x4
	m_nButtons: 80n, // client::CInButtonState  | Schema_DeclaredClass | Size: 0x20
	m_nQueuedButtonDownMask: 112n, // uint64_t m_nQueuedButtonDownMask; |  0x70 | Schema_Builtin | Size: 0x8
	m_nQueuedButtonChangeMask: 120n, // uint64_t m_nQueuedButtonChangeMask; |  0x78 | Schema_Builtin | Size: 0x8
	m_nButtonDoublePressed: 128n, // uint64_t m_nButtonDoublePressed; |  0x80 | Schema_Builtin | Size: 0x8
	m_pButtonPressedCmdNumber: 136n, // uint32_t m_pButtonPressedCmdNumber[64]; |  0x88 | Schema_FixedArray | Size: 0x100
	m_nLastCommandNumberProcessed: 392n, // uint32_t m_nLastCommandNumberProcessed; |  0x188 | Schema_Builtin | Size: 0x4
	m_nToggleButtonDownMask: 400n, // uint64_t m_nToggleButtonDownMask; |  0x190 | Schema_Builtin | Size: 0x8
	m_flMaxspeed: 416n, // float32 m_flMaxspeed; |  0x1a0 | Schema_Builtin | Size: 0x4
	m_arrForceSubtickMoveWhen: 420n, // float32 m_arrForceSubtickMoveWhen[4]; |  0x1a4 | Schema_FixedArray | Size: 0x10
	m_flForwardMove: 436n, // float32 m_flForwardMove; |  0x1b4 | Schema_Builtin | Size: 0x4
	m_flLeftMove: 440n, // float32 m_flLeftMove; |  0x1b8 | Schema_Builtin | Size: 0x4
	m_flUpMove: 444n, // float32 m_flUpMove; |  0x1bc | Schema_Builtin | Size: 0x4
	m_vecLastMovementImpulses: 448n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecOldViewAngles: 552n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
}
