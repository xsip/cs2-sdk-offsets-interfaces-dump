#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animationsystem_HSequence.hpp"
#include "animgraphlib_CParamSpanUpdater.hpp"

class animgraphlib_CSequenceUpdateNode {
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
};
