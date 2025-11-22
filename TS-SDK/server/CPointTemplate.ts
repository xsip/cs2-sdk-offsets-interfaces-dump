// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x558
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CPointTemplate  = {
	...server_CLogicalEntity,
	m_iszWorldName: 1264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSource2EntityLumpName: 1272n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszEntityFilterName: 1280n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flTimeoutInterval: 1288n, // float32 m_flTimeoutInterval; |  0x508 | Schema_Builtin | Size: 0x4
	m_bAsynchronouslySpawnEntities: 1292n, // bool m_bAsynchronouslySpawnEntities; |  0x50c | Schema_Builtin | Size: 0x1
	m_clientOnlyEntityBehavior: 1296n, // client::PointTemplateClientOnlyEntityBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_ownerSpawnGroupType: 1300n, // client::PointTemplateOwnerSpawnGroupType_t  | Schema_DeclaredEnum | Size: 0x4
	m_createdSpawnGroupHandles: 1304n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_SpawnedEntityHandles: 1328n, // GlobalTypes::CUtlVector<GlobalTypes::CEntityHandle>  | Schema_Atomic | Size: 0x18
	m_ScriptSpawnCallback: 1352n, // GlobalTypes::HSCRIPT  | Schema_Atomic | Size: 0x8
	m_ScriptCallbackScope: 1360n, // GlobalTypes::HSCRIPT  | Schema_Atomic | Size: 0x8
}
