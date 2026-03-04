// generated - do not edit!

import {client_CSkeletonAnimationController} from './CSkeletonAnimationController';
// Class size: 0x1B38
// BaseClass: : public CS2::client::CSkeletonAnimationController
export const client_CBaseAnimGraphController  = {
	...client_CSkeletonAnimationController,
	m_nAnimationAlgorithm: 24n, // client::AnimationAlgorithm_t  | Schema_DeclaredEnum | Size: 0x1
	m_animGraphNetworkedVars: 32n, // client::CAnimGraphNetworkedVariables  | Schema_DeclaredClass | Size: 0x1490
	m_pAnimGraphInstance: 5296n, // GlobalTypes::CSmartPtr<animgraphlib::IAnimationGraphInstance>  | Schema_Atomic | Size: 0x8
	m_nNextExternalGraphHandle: 5392n, // client::ExternalAnimGraphHandle_t  | Schema_DeclaredClass | Size: 0x4
	m_vecSecondarySkeletonNames: 5400n, // GlobalTypes::CUtlVector<GlobalTypes::CGlobalSymbol>  | Schema_Atomic | Size: 0x18
	m_vecSecondarySkeletons: 5424n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::CBaseAnimGraph>>  | Schema_Atomic | Size: 0x18
	m_nSecondarySkeletonMasterCount: 5448n, // int32_t m_nSecondarySkeletonMasterCount; |  0x1548 | Schema_Builtin | Size: 0x4
	m_flSoundSyncTime: 5456n, // float32 m_flSoundSyncTime; |  0x1550 | Schema_Builtin | Size: 0x4
	m_nActiveIKChainMask: 5460n, // uint32_t m_nActiveIKChainMask; |  0x1554 | Schema_Builtin | Size: 0x4
	m_hSequence: 5544n, // animationsystem::HSequence  | Schema_DeclaredClass | Size: 0x4
	m_flSeqStartTime: 5548n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flSeqFixedCycle: 5552n, // float32 m_flSeqFixedCycle; |  0x15b0 | Schema_Builtin | Size: 0x4
	m_nAnimLoopMode: 5556n, // client::AnimLoopMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flPlaybackRate: 5560n, // GlobalTypes::CNetworkedQuantizedFloat  | Schema_Atomic | Size: 0x8
	m_nNotifyState: 5572n, // client::SequenceFinishNotifyState_t  | Schema_DeclaredEnum | Size: 0x1
	m_bNetworkedAnimationInputsChanged: 5573n, // bool m_bNetworkedAnimationInputsChanged; |  0x15c5 | Schema_Builtin | Size: 0x1
	m_bNetworkedSequenceChanged: 5574n, // bool m_bNetworkedSequenceChanged; |  0x15c6 | Schema_Builtin | Size: 0x1
	m_bLastUpdateSkipped: 5575n, // bool m_bLastUpdateSkipped; |  0x15c7 | Schema_Builtin | Size: 0x1
	m_bSequenceFinished: 5576n, // bool m_bSequenceFinished; |  0x15c8 | Schema_Builtin | Size: 0x1
	m_nPrevAnimUpdateTick: 5580n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_hGraphDefinitionAG2: 6248n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCNmGraphDefinition>  | Schema_Atomic | Size: 0x8
	m_serializedPoseRecipeAG2: 6256n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_nSerializePoseRecipeSizeAG2: 6280n, // int32_t m_nSerializePoseRecipeSizeAG2; |  0x1888 | Schema_Builtin | Size: 0x4
	m_nSerializePoseRecipeVersionAG2: 6284n, // int32_t m_nSerializePoseRecipeVersionAG2; |  0x188c | Schema_Builtin | Size: 0x4
	m_nServerGraphInstanceIteration: 6288n, // int32_t m_nServerGraphInstanceIteration; |  0x1890 | Schema_Builtin | Size: 0x4
	m_nServerSerializationContextIteration: 6292n, // int32_t m_nServerSerializationContextIteration; |  0x1894 | Schema_Builtin | Size: 0x4
	m_primaryGraphId: 6296n, // resourcefile::ResourceId_t  | Schema_DeclaredClass | Size: 0x8
	m_vecExternalGraphIds: 6304n, // GlobalTypes::C_NetworkUtlVectorBase<resourcefile::ResourceId_t>  | Schema_Atomic | Size: 0x18
	m_vecExternalClipIds: 6328n, // GlobalTypes::C_NetworkUtlVectorBase<resourcefile::ResourceId_t>  | Schema_Atomic | Size: 0x18
	m_sAnimGraph2Identifier: 6352n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_vecExternalGraphs: 6904n, // GlobalTypes::CUtlVector<client::ExternalAnimGraph_t>  | Schema_Atomic | Size: 0x18
	m_nPrevAnimationAlgorithm: 6961n, // client::AnimationAlgorithm_t  | Schema_DeclaredEnum | Size: 0x1
}
