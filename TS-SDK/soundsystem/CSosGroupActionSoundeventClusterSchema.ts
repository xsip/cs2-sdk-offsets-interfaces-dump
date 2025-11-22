// generated - do not edit!

import {soundsystem_CSosGroupActionSchema} from './CSosGroupActionSchema';
// Class size: 0x50
// BaseClass: : public CS2::soundsystem::CSosGroupActionSchema
export const soundsystem_CSosGroupActionSoundeventClusterSchema  = {
	...soundsystem_CSosGroupActionSchema,
	m_nMinNearby: 8n, // int32_t m_nMinNearby; |  0x8 | Schema_Builtin | Size: 0x4
	m_flClusterEpsilon: 12n, // float32 m_flClusterEpsilon; |  0xc | Schema_Builtin | Size: 0x4
	m_shouldPlayOpvar: 16n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_shouldPlayClusterChild: 24n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_clusterSizeOpvar: 32n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_groupBoundingBoxMinsOpvar: 40n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_groupBoundingBoxMaxsOpvar: 48n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
}
