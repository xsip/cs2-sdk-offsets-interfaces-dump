// generated - do not edit!

import {client_CPlayerPawnComponent} from '../client/CPlayerPawnComponent';
// Class size: 0x238
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const server_CPlayer_MovementServices  = {
	...client_CPlayerPawnComponent,
	m_nImpulse: 64n, // int32_t m_nImpulse; |  0x40 | Schema_Builtin | Size: 0x4
	m_nButtons: 72n, // client::CInButtonState  | Schema_DeclaredClass | Size: 0x20
	m_nQueuedButtonDownMask: 104n, // uint64_t m_nQueuedButtonDownMask; |  0x68 | Schema_Builtin | Size: 0x8
	m_nQueuedButtonChangeMask: 112n, // uint64_t m_nQueuedButtonChangeMask; |  0x70 | Schema_Builtin | Size: 0x8
	m_nButtonDoublePressed: 120n, // uint64_t m_nButtonDoublePressed; |  0x78 | Schema_Builtin | Size: 0x8
	m_pButtonPressedCmdNumber: 128n, // uint32_t m_pButtonPressedCmdNumber[64]; |  0x80 | Schema_FixedArray | Size: 0x100
	m_nLastCommandNumberProcessed: 384n, // uint32_t m_nLastCommandNumberProcessed; |  0x180 | Schema_Builtin | Size: 0x4
	m_nToggleButtonDownMask: 392n, // uint64_t m_nToggleButtonDownMask; |  0x188 | Schema_Builtin | Size: 0x8
	m_flMaxspeed: 408n, // float32 m_flMaxspeed; |  0x198 | Schema_Builtin | Size: 0x4
	m_arrForceSubtickMoveWhen: 412n, // float32 m_arrForceSubtickMoveWhen[4]; |  0x19c | Schema_FixedArray | Size: 0x10
	m_flForwardMove: 428n, // float32 m_flForwardMove; |  0x1ac | Schema_Builtin | Size: 0x4
	m_flLeftMove: 432n, // float32 m_flLeftMove; |  0x1b0 | Schema_Builtin | Size: 0x4
	m_flUpMove: 436n, // float32 m_flUpMove; |  0x1b4 | Schema_Builtin | Size: 0x4
	m_vecLastMovementImpulses: 440n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecOldViewAngles: 544n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
}
