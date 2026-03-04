// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x548
// BaseClass: : public CS2::server::CPointEntity
export const server_CPointAngleSensor  = {
	...server_CPointEntity,
	m_bDisabled: 1192n, // bool m_bDisabled; |  0x4a8 | Schema_Builtin | Size: 0x1
	m_nLookAtName: 1200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hTargetEntity: 1208n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hLookAtEntity: 1212n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flDuration: 1216n, // float32 m_flDuration; |  0x4c0 | Schema_Builtin | Size: 0x4
	m_flDotTolerance: 1220n, // float32 m_flDotTolerance; |  0x4c4 | Schema_Builtin | Size: 0x4
	m_flFacingTime: 1224n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bFired: 1228n, // bool m_bFired; |  0x4cc | Schema_Builtin | Size: 0x1
	m_OnFacingLookat: 1232n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnNotFacingLookat: 1256n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_TargetDir: 1280n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_FacingPercentage: 1320n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
}
