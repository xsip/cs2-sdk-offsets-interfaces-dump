#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_HitReactFixedSettings_t.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CHitReactUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    animgraphlib_HitReactFixedSettings_t m_opFixedSettings;
    char pad_153[0x8];
    animgraphlib_CAnimParamHandle m_triggerParam;
    animgraphlib_CAnimParamHandle m_hitBoneParam;
    animgraphlib_CAnimParamHandle m_hitOffsetParam;
    animgraphlib_CAnimParamHandle m_hitDirectionParam;
    animgraphlib_CAnimParamHandle m_hitStrengthParam;
    char pad_154[0x2];
    float32 m_flMinDelayBetweenHits;
    bool m_bResetChild;
    char end_pad_155[0x3];
};
