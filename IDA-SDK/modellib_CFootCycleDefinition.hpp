#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CAnimCycle.hpp"
#include "modellib_CFootCycle.hpp"

class modellib_CFootCycleDefinition {
    Vector m_vStancePositionMS;
    Vector m_vMidpointPositionMS;
    float32 m_flStanceDirectionMS;
    Vector m_vToStrideStartPos;
    modellib_CAnimCycle m_stanceCycle;
    modellib_CFootCycle m_footLiftCycle;
    modellib_CFootCycle m_footOffCycle;
    modellib_CFootCycle m_footStrikeCycle;
    modellib_CFootCycle m_footLandCycle;
};
