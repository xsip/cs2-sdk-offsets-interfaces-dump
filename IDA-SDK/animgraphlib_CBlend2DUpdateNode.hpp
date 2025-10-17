#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CParamSpanUpdater.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CBlend2DUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable72[0x8];
    char m_items[0x18];
    char m_tags[0x18];
    animgraphlib_CParamSpanUpdater m_paramSpans;
    char m_nodeItemIndices[0x18];
    animgraphlib_CAnimInputDamping m_damping;
    animgraphlib_AnimValueSource m_blendSourceX;
    animgraphlib_CAnimParamHandle m_paramX;
    char pad_73[0x2];
    animgraphlib_AnimValueSource m_blendSourceY;
    animgraphlib_CAnimParamHandle m_paramY;
    char pad_74[0x2];
    animgraphlib_Blend2DMode m_eBlendMode;
    float32 m_playbackSpeed;
    bool m_bLoop;
    bool m_bLockBlendOnReset;
    bool m_bLockWhenWaning;
    bool m_bAnimEventsAndTagsOnMostWeightedOnly;
    char end_pad_75[0x4];
};
