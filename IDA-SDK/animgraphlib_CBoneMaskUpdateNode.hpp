#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CBoneMaskUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable14[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChild1;
    animgraphlib_CAnimUpdateNodeRef m_pChild2;
    animgraphlib_BinaryNodeTiming m_timingBehavior;
    float32 m_flTimingBlend;
    bool m_bResetChild1;
    bool m_bResetChild2;
    char end_pad_15[0x6];
    char vTable84[0x4];
    int32_t m_nWeightListIndex;
    float32 m_flRootMotionBlend;
    animgraphlib_BoneMaskBlendSpace m_blendSpace;
    animgraphlib_BinaryNodeChildOption m_footMotionTiming;
    bool m_bUseBlendScale;
    char pad_85[0x3];
    animgraphlib_AnimValueSource m_blendValueSource;
    animgraphlib_CAnimParamHandle m_hBlendParameter;
    char end_pad_86[0x2];
};
