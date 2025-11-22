// generated - do not edit!

import {client_C_BaseFlex} from './C_BaseFlex';
// Class size: 0x18E0
// BaseClass: : public CS2::client::C_BaseFlex
export const client_C_EconEntity  = {
	...client_C_BaseFlex,
	m_flFlexDelayTime: 4984n, // float32 m_flFlexDelayTime; |  0x1378 | Schema_Builtin | Size: 0x4
	m_flFlexDelayedWeight: 4992n, // float32* m_flFlexDelayedWeight; |  0x1380 | Schema_Ptr | Size: 0x8
	m_bAttributesInitialized: 5000n, // bool m_bAttributesInitialized; |  0x1388 | Schema_Builtin | Size: 0x1
	m_AttributeManager: 5008n, // client::C_AttributeContainer  | Schema_DeclaredClass | Size: 0x4d8
	m_OriginalOwnerXuidLow: 6248n, // uint32_t m_OriginalOwnerXuidLow; |  0x1868 | Schema_Builtin | Size: 0x4
	m_OriginalOwnerXuidHigh: 6252n, // uint32_t m_OriginalOwnerXuidHigh; |  0x186c | Schema_Builtin | Size: 0x4
	m_nFallbackPaintKit: 6256n, // int32_t m_nFallbackPaintKit; |  0x1870 | Schema_Builtin | Size: 0x4
	m_nFallbackSeed: 6260n, // int32_t m_nFallbackSeed; |  0x1874 | Schema_Builtin | Size: 0x4
	m_flFallbackWear: 6264n, // float32 m_flFallbackWear; |  0x1878 | Schema_Builtin | Size: 0x4
	m_nFallbackStatTrak: 6268n, // int32_t m_nFallbackStatTrak; |  0x187c | Schema_Builtin | Size: 0x4
	m_bClientside: 6272n, // bool m_bClientside; |  0x1880 | Schema_Builtin | Size: 0x1
	m_bParticleSystemsCreated: 6273n, // bool m_bParticleSystemsCreated; |  0x1881 | Schema_Builtin | Size: 0x1
	m_vecAttachedParticles: 6280n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_hViewmodelAttachment: 6304n, // GlobalTypes::CHandle<client::CBaseAnimGraph>  | Schema_Atomic | Size: 0x4
	m_iOldTeam: 6308n, // int32_t m_iOldTeam; |  0x18a4 | Schema_Builtin | Size: 0x4
	m_bAttachmentDirty: 6312n, // bool m_bAttachmentDirty; |  0x18a8 | Schema_Builtin | Size: 0x1
	m_nUnloadedModelIndex: 6316n, // int32_t m_nUnloadedModelIndex; |  0x18ac | Schema_Builtin | Size: 0x4
	m_iNumOwnerValidationRetries: 6320n, // int32_t m_iNumOwnerValidationRetries; |  0x18b0 | Schema_Builtin | Size: 0x4
	m_hOldProvidee: 6336n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_vecAttachedModels: 6344n, // GlobalTypes::CUtlVector<client::C_EconEntity::AttachedModelData_t>  | Schema_Atomic | Size: 0x18
}
