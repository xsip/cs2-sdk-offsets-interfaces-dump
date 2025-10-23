#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"

class animgraphlib_CSubtractUpdateNode {
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
    char vTable234[0x4];
    animgraphlib_BinaryNodeChildOption m_footMotionTiming;
    bool m_bApplyToFootMotion;
    bool m_bApplyChannelsSeparately;
    bool m_bUseModelSpace;
    char end_pad_235[0x5];
};
