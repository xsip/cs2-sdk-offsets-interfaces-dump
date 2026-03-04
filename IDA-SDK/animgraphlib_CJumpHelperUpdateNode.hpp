#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animationsystem_HSequence.hpp"
#include "animgraphlib_CParamSpanUpdater.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CJumpHelperUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    void **__vftable_4;
    char __vftable_pad[4];
    float32 m_playbackSpeed;
    bool m_bLoop;
    char end_pad_163[0x7];
    animationsystem_HSequence m_hSequence;
    float32 m_duration;
    animgraphlib_CParamSpanUpdater m_paramSpans;
    char m_tags[0x18];
    animgraphlib_CAnimParamHandle m_hTargetParam;
    char pad_160[0x2];
    Vector m_flOriginalJumpMovement;
    float32 m_flOriginalJumpDuration;
    float32 m_flJumpStartCycle;
    float32 m_flJumpEndCycle;
    animgraphlib_JumpCorrectionMethod m_eCorrectionMethod;
    bool m_bTranslationAxis[3];
    bool m_bScaleSpeed;
    char end_pad_161[0x4];
};
