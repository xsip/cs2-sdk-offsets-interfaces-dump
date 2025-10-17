#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_FootPinningPoseOpFixedData_t.hpp"

class animgraphlib_CFootPinningUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char vTable143[0x8];
    animgraphlib_FootPinningPoseOpFixedData_t m_poseOpFixedData;
    animgraphlib_FootPinningTimingSource m_eTimingSource;
    char pad_144[0x4];
    char m_params[0x18];
    bool m_bResetChild;
    char end_pad_145[0x7];
};
