#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CFootCycleDefinition.hpp"
#include "modellib_CFootTrajectories.hpp"

class modellib_CFootStride {
    modellib_CFootCycleDefinition m_definition;
    char pad_326[0x4];
    modellib_CFootTrajectories m_trajectories;
};
