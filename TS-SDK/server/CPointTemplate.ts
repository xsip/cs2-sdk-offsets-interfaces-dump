// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x510
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CPointTemplate  = {
	...server_CLogicalEntity,
	m_iszWorldName: 1192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSource2EntityLumpName: 1200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszEntityFilterName: 1208n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flTimeoutInterval: 1216n, // float32 m_flTimeoutInterval; |  0x4c0 | Schema_Builtin | Size: 0x4
	m_bAsynchronouslySpawnEntities: 1220n, // bool m_bAsynchronouslySpawnEntities; |  0x4c4 | Schema_Builtin | Size: 0x1
	m_clientOnlyEntityBehavior: 1224n, // client::PointTemplateClientOnlyEntityBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_ownerSpawnGroupType: 1228n, // client::PointTemplateOwnerSpawnGroupType_t  | Schema_DeclaredEnum | Size: 0x4
	m_createdSpawnGroupHandles: 1232n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_SpawnedEntityHandles: 1256n, // GlobalTypes::CUtlVector<GlobalTypes::CEntityHandle>  | Schema_Atomic | Size: 0x18
	m_ScriptSpawnCallback: 1280n, // GlobalTypes::HSCRIPT  | Schema_Atomic | Size: 0x8
	m_ScriptCallbackScope: 1288n, // GlobalTypes::HSCRIPT  | Schema_Atomic | Size: 0x8
}
