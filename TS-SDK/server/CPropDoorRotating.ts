// generated - do not edit!

import {server_CBasePropDoor} from './CBasePropDoor';
// Class size: 0x1090
// BaseClass: : public CS2::server::CBasePropDoor
export const server_CPropDoorRotating  = {
	...server_CBasePropDoor,
	m_vecAxis: 4080n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flDistance: 4092n, // float32 m_flDistance; |  0xffc | Schema_Builtin | Size: 0x4
	m_eSpawnPosition: 4096n, // server::PropDoorRotatingSpawnPos_t  | Schema_DeclaredEnum | Size: 0x4
	m_eOpenDirection: 4100n, // server::PropDoorRotatingOpenDirection_e  | Schema_DeclaredEnum | Size: 0x4
	m_eCurrentOpenDirection: 4104n, // server::PropDoorRotatingOpenDirection_e  | Schema_DeclaredEnum | Size: 0x4
	m_eDefaultCheckDirection: 4108n, // server::doorCheck_e  | Schema_DeclaredEnum | Size: 0x4
	m_flAjarAngle: 4112n, // float32 m_flAjarAngle; |  0x1010 | Schema_Builtin | Size: 0x4
	m_angRotationAjarDeprecated: 4116n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angRotationClosed: 4128n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angRotationOpenForward: 4140n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angRotationOpenBack: 4152n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_angGoal: 4164n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecForwardBoundsMin: 4176n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecForwardBoundsMax: 4188n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecBackBoundsMin: 4200n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecBackBoundsMax: 4212n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bAjarDoorShouldntAlwaysOpen: 4224n, // bool m_bAjarDoorShouldntAlwaysOpen; |  0x1080 | Schema_Builtin | Size: 0x1
	m_hEntityBlocker: 4228n, // GlobalTypes::CHandle<server::CEntityBlocker>  | Schema_Atomic | Size: 0x4
}
