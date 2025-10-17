#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_IKSolverSettings_t {
    animgraphlib_IKSolverType m_SolverType;
    int32_t m_nNumIterations;
    animgraphlib_EIKEndEffectorRotationFixUpMode m_EndEffectorRotationFixUpMode;
};
