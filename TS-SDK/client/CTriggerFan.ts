// generated - do not edit!

import {client_C_BaseTrigger} from './C_BaseTrigger';
// Class size: 0x1050
// BaseClass: : public CS2::client::C_BaseTrigger
export const client_CTriggerFan  = {
	...client_C_BaseTrigger,
	m_vFanOriginOffset: 4080n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vDirection: 4092n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bPushTowardsInfoTarget: 4104n, // bool m_bPushTowardsInfoTarget; |  0x1008 | Schema_Builtin | Size: 0x1
	m_bPushAwayFromInfoTarget: 4105n, // bool m_bPushAwayFromInfoTarget; |  0x1009 | Schema_Builtin | Size: 0x1
	m_qNoiseDelta: 4112n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_hInfoFan: 4128n, // GlobalTypes::CHandle<client::CInfoFan>  | Schema_Atomic | Size: 0x4
	m_flForce: 4132n, // float32 m_flForce; |  0x1024 | Schema_Builtin | Size: 0x4
	m_bFalloff: 4136n, // bool m_bFalloff; |  0x1028 | Schema_Builtin | Size: 0x1
	m_RampTimer: 4144n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
}
