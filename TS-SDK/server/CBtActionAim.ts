// generated - do not edit!

import {server_CBtNode} from './CBtNode';
// Class size: 0xF8
// BaseClass: : public CS2::server::CBtNode
export const server_CBtActionAim  = {
	...server_CBtNode,
	m_szSensorInputKey: 104n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szAimReadyKey: 128n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_flZoomCooldownTimestamp: 136n, // float32 m_flZoomCooldownTimestamp; |  0x88 | Schema_Builtin | Size: 0x4
	m_bDoneAiming: 140n, // bool m_bDoneAiming; |  0x8c | Schema_Builtin | Size: 0x1
	m_flLerpStartTime: 144n, // float32 m_flLerpStartTime; |  0x90 | Schema_Builtin | Size: 0x4
	m_flNextLookTargetLerpTime: 148n, // float32 m_flNextLookTargetLerpTime; |  0x94 | Schema_Builtin | Size: 0x4
	m_flPenaltyReductionRatio: 152n, // float32 m_flPenaltyReductionRatio; |  0x98 | Schema_Builtin | Size: 0x4
	m_NextLookTarget: 156n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_AimTimer: 168n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_SniperHoldTimer: 192n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_FocusIntervalTimer: 216n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_bAcquired: 240n, // bool m_bAcquired; |  0xf0 | Schema_Builtin | Size: 0x1
}
