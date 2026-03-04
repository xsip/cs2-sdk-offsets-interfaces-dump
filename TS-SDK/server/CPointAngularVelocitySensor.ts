// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x578
// BaseClass: : public CS2::server::CPointEntity
export const server_CPointAngularVelocitySensor  = {
	...server_CPointEntity,
	m_hTargetEntity: 1192n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flThreshold: 1196n, // float32 m_flThreshold; |  0x4ac | Schema_Builtin | Size: 0x4
	m_nLastCompareResult: 1200n, // int32_t m_nLastCompareResult; |  0x4b0 | Schema_Builtin | Size: 0x4
	m_nLastFireResult: 1204n, // int32_t m_nLastFireResult; |  0x4b4 | Schema_Builtin | Size: 0x4
	m_flFireTime: 1208n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFireInterval: 1212n, // float32 m_flFireInterval; |  0x4bc | Schema_Builtin | Size: 0x4
	m_flLastAngVelocity: 1216n, // float32 m_flLastAngVelocity; |  0x4c0 | Schema_Builtin | Size: 0x4
	m_lastOrientation: 1220n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecAxis: 1232n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_bUseHelper: 1244n, // bool m_bUseHelper; |  0x4dc | Schema_Builtin | Size: 0x1
	m_AngularVelocity: 1248n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_OnLessThan: 1280n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnLessThanOrEqualTo: 1304n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnGreaterThan: 1328n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnGreaterThanOrEqualTo: 1352n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnEqualTo: 1376n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
