#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_ComputeProjectVector3D {
    char vTable2558[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2559[0x8];
    CUtlString m_OutputVariableName;
    smartprops_CSmartPropAttributeCoordinateSpace m_OutputCoordinateSpace;
    CSmartPropAttributeVector m_InputVectorA;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpaceA;
    CSmartPropAttributeVector m_InputVectorB;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpaceB;
    CSmartPropAttributeBool m_bPlane;
};
