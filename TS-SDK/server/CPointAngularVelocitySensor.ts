// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x618
// BaseClass: : public CS2::server::CPointEntity
export const server_CPointAngularVelocitySensor  = {
	...server_CPointEntity,
	m_hTargetEntity: 1264n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flThreshold: 1268n, // float32 m_flThreshold; |  0x4f4 | Schema_Builtin | Size: 0x4
	m_nLastCompareResult: 1272n, // int32_t m_nLastCompareResult; |  0x4f8 | Schema_Builtin | Size: 0x4
	m_nLastFireResult: 1276n, // int32_t m_nLastFireResult; |  0x4fc | Schema_Builtin | Size: 0x4
	m_flFireTime: 1280n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFireInterval: 1284n, // float32 m_flFireInterval; |  0x504 | Schema_Builtin | Size: 0x4
	m_flLastAngVelocity: 1288n, // float32 m_flLastAngVelocity; |  0x508 | Schema_Builtin | Size: 0x4
	m_lastOrientation: 1292n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecAxis: 1304n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_bUseHelper: 1316n, // bool m_bUseHelper; |  0x524 | Schema_Builtin | Size: 0x1
	m_AngularVelocity: 1320n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_OnLessThan: 1360n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnLessThanOrEqualTo: 1400n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnGreaterThan: 1440n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnGreaterThanOrEqualTo: 1480n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnEqualTo: 1520n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
