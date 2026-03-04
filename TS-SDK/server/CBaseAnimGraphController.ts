// generated - do not edit!

import {client_CSkeletonAnimationController} from '../client/CSkeletonAnimationController';
// Class size: 0x858
// BaseClass: : public CS2::client::CSkeletonAnimationController
export const server_CBaseAnimGraphController  = {
	...client_CSkeletonAnimationController,
	m_nAnimationAlgorithm: 24n, // client::AnimationAlgorithm_t  | Schema_DeclaredEnum | Size: 0x1
	m_animGraphNetworkedVars: 32n, // server::CAnimGraphNetworkedVariables  | Schema_DeclaredClass | Size: 0x208
	m_pAnimGraphInstance: 552n, // GlobalTypes::CSmartPtr<animgraphlib::IAnimationGraphInstance>  | Schema_Atomic | Size: 0x8
	m_nNextExternalGraphHandle: 648n, // client::ExternalAnimGraphHandle_t  | Schema_DeclaredClass | Size: 0x4
	m_vecSecondarySkeletonNames: 656n, // GlobalTypes::CUtlVector<GlobalTypes::CGlobalSymbol>  | Schema_Atomic | Size: 0x18
	m_vecSecondarySkeletons: 680n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBaseAnimGraph>>  | Schema_Atomic | Size: 0x18
	m_nSecondarySkeletonMasterCount: 704n, // int32_t m_nSecondarySkeletonMasterCount; |  0x2c0 | Schema_Builtin | Size: 0x4
	m_flSoundSyncTime: 708n, // float32 m_flSoundSyncTime; |  0x2c4 | Schema_Builtin | Size: 0x4
	m_nActiveIKChainMask: 712n, // uint32_t m_nActiveIKChainMask; |  0x2c8 | Schema_Builtin | Size: 0x4
	m_hSequence: 716n, // animationsystem::HSequence  | Schema_DeclaredClass | Size: 0x4
	m_flSeqStartTime: 720n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flSeqFixedCycle: 724n, // float32 m_flSeqFixedCycle; |  0x2d4 | Schema_Builtin | Size: 0x4
	m_nAnimLoopMode: 728n, // client::AnimLoopMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flPlaybackRate: 732n, // GlobalTypes::CNetworkedQuantizedFloat  | Schema_Atomic | Size: 0x8
	m_nNotifyState: 744n, // client::SequenceFinishNotifyState_t  | Schema_DeclaredEnum | Size: 0x1
	m_bNetworkedAnimationInputsChanged: 745n, // bool m_bNetworkedAnimationInputsChanged; |  0x2e9 | Schema_Builtin | Size: 0x1
	m_bNetworkedSequenceChanged: 746n, // bool m_bNetworkedSequenceChanged; |  0x2ea | Schema_Builtin | Size: 0x1
	m_bLastUpdateSkipped: 747n, // bool m_bLastUpdateSkipped; |  0x2eb | Schema_Builtin | Size: 0x1
	m_bSequenceFinished: 748n, // bool m_bSequenceFinished; |  0x2ec | Schema_Builtin | Size: 0x1
	m_nPrevAnimUpdateTick: 752n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_hGraphDefinitionAG2: 1424n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCNmGraphDefinition>  | Schema_Atomic | Size: 0x8
	m_serializedPoseRecipeAG2: 1432n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_nSerializePoseRecipeSizeAG2: 1456n, // int32_t m_nSerializePoseRecipeSizeAG2; |  0x5b0 | Schema_Builtin | Size: 0x4
	m_nSerializePoseRecipeVersionAG2: 1460n, // int32_t m_nSerializePoseRecipeVersionAG2; |  0x5b4 | Schema_Builtin | Size: 0x4
	m_nServerGraphInstanceIteration: 1464n, // int32_t m_nServerGraphInstanceIteration; |  0x5b8 | Schema_Builtin | Size: 0x4
	m_nServerSerializationContextIteration: 1468n, // int32_t m_nServerSerializationContextIteration; |  0x5bc | Schema_Builtin | Size: 0x4
	m_primaryGraphId: 1472n, // resourcefile::ResourceId_t  | Schema_DeclaredClass | Size: 0x8
	m_vecExternalGraphIds: 1480n, // GlobalTypes::CNetworkUtlVectorBase<resourcefile::ResourceId_t>  | Schema_Atomic | Size: 0x18
	m_vecExternalClipIds: 1504n, // GlobalTypes::CNetworkUtlVectorBase<resourcefile::ResourceId_t>  | Schema_Atomic | Size: 0x18
	m_sAnimGraph2Identifier: 1528n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_vecExternalGraphs: 2080n, // GlobalTypes::CUtlVector<client::ExternalAnimGraph_t>  | Schema_Atomic | Size: 0x18
}
