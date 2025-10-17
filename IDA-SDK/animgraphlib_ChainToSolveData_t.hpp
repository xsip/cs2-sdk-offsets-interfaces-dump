#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_IKSolverSettings_t.hpp"
#include "animgraphlib_IKTargetSettings_t.hpp"

class animgraphlib_ChainToSolveData_t {
    int32_t m_nChainIndex;
    animgraphlib_IKSolverSettings_t m_SolverSettings;
    animgraphlib_IKTargetSettings_t m_TargetSettings;
    animgraphlib_SolveIKChainAnimNodeDebugSetting m_DebugSetting;
    float32 m_flDebugNormalizedValue;
    VectorAligned m_vDebugOffset;
};
