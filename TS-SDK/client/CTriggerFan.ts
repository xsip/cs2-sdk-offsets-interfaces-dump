// generated - do not edit!

import {client_C_BaseTrigger} from './C_BaseTrigger';
// Class size: 0xFC0
// BaseClass: : public CS2::client::C_BaseTrigger
export const client_CTriggerFan  = {
	...client_C_BaseTrigger,
	m_vFanOriginOffset: 3928n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vDirection: 3940n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bPushTowardsInfoTarget: 3952n, // bool m_bPushTowardsInfoTarget; |  0xf70 | Schema_Builtin | Size: 0x1
	m_bPushAwayFromInfoTarget: 3953n, // bool m_bPushAwayFromInfoTarget; |  0xf71 | Schema_Builtin | Size: 0x1
	m_qNoiseDelta: 3968n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_hInfoFan: 3984n, // GlobalTypes::CHandle<client::CInfoFan>  | Schema_Atomic | Size: 0x4
	m_flForce: 3988n, // float32 m_flForce; |  0xf94 | Schema_Builtin | Size: 0x4
	m_bFalloff: 3992n, // bool m_bFalloff; |  0xf98 | Schema_Builtin | Size: 0x1
	m_RampTimer: 4000n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
}
