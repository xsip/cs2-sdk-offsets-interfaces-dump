// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x550
// BaseClass: : public CS2::server::CPointEntity
export const server_CPhysForce  = {
	...server_CPointEntity,
	m_nameAttach: 1272n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_force: 1280n, // float32 m_force; |  0x500 | Schema_Builtin | Size: 0x4
	m_forceTime: 1284n, // float32 m_forceTime; |  0x504 | Schema_Builtin | Size: 0x4
	m_attachedObject: 1288n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_wasRestored: 1292n, // bool m_wasRestored; |  0x50c | Schema_Builtin | Size: 0x1
	m_integrator: 1296n, // server::CConstantForceController  | Schema_DeclaredClass | Size: 0x40
}
