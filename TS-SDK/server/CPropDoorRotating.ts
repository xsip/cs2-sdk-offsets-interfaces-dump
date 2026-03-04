// generated - do not edit!

import {server_CBasePropDoor} from './CBasePropDoor';
// Class size: 0xEF0
// BaseClass: : public CS2::server::CBasePropDoor
export const server_CPropDoorRotating  = {
	...server_CBasePropDoor,
	m_vecAxis: 3664n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flDistance: 3676n, // float32 m_flDistance; |  0xe5c | Schema_Builtin | Size: 0x4
	m_eSpawnPosition: 3680n, // server::PropDoorRotatingSpawnPos_t  | Schema_DeclaredEnum | Size: 0x4
	m_eOpenDirection: 3684n, // server::PropDoorRotatingOpenDirection_e  | Schema_DeclaredEnum | Size: 0x4
	m_eCurrentOpenDirection: 3688n, // server::PropDoorRotatingOpenDirection_e  | Schema_DeclaredEnum | Size: 0x4
	m_eDefaultCheckDirection: 3692n, // server::doorCheck_e  | Schema_DeclaredEnum | Size: 0x4
	m_flAjarAngle: 3696n, // float32 m_flAjarAngle; |  0xe70 | Schema_Builtin | Size: 0x4
	m_angRotationAjarDeprecated: 3700n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angRotationClosed: 3712n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angRotationOpenForward: 3724n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angRotationOpenBack: 3736n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angGoal: 3748n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecForwardBoundsMin: 3760n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecForwardBoundsMax: 3772n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecBackBoundsMin: 3784n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecBackBoundsMax: 3796n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bAjarDoorShouldntAlwaysOpen: 3808n, // bool m_bAjarDoorShouldntAlwaysOpen; |  0xee0 | Schema_Builtin | Size: 0x1
	m_hEntityBlocker: 3812n, // GlobalTypes::CHandle<server::CEntityBlocker>  | Schema_Atomic | Size: 0x4
}
