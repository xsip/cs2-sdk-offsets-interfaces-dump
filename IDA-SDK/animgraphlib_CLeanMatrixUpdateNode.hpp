#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CPoseHandle.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animationsystem_HSequence.hpp"

class animgraphlib_CLeanMatrixUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable164[0x4];
    int32_t m_frameCorners[3];
    char pad_165[0x24];
    animgraphlib_CPoseHandle m_poses[9];
    animgraphlib_CAnimInputDamping m_damping;
    animgraphlib_AnimVectorSource m_blendSource;
    animgraphlib_CAnimParamHandle m_paramIndex;
    char pad_166[0x2];
    Vector m_verticalAxis;
    Vector m_horizontalAxis;
    animationsystem_HSequence m_hSequence;
    float32 m_flMaxValue;
    int32_t m_nSequenceMaxFrame;
    char end_pad_167[0x4];
};
