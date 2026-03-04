// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x508
// BaseClass: : public CS2::server::CPointEntity
export const server_CPhysForce  = {
	...server_CPointEntity,
	m_nameAttach: 1200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_force: 1208n, // float32 m_force; |  0x4b8 | Schema_Builtin | Size: 0x4
	m_forceTime: 1212n, // float32 m_forceTime; |  0x4bc | Schema_Builtin | Size: 0x4
	m_attachedObject: 1216n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_wasRestored: 1220n, // bool m_wasRestored; |  0x4c4 | Schema_Builtin | Size: 0x1
	m_integrator: 1224n, // server::CConstantForceController  | Schema_DeclaredClass | Size: 0x40
}
