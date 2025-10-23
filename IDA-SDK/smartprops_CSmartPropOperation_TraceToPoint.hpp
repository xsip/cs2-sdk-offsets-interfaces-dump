#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeTraceNoHit.hpp"

class smartprops_CSmartPropOperation_TraceToPoint {
    char vTable2558[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2559[0x8];
    CSmartPropAttributeVector m_Origin;
    smartprops_CSmartPropAttributeCoordinateSpace m_OriginSpace;
    CSmartPropAttributeFloat m_flOriginOffset;
    CSmartPropAttributeFloat m_flSurfaceUpInfluence;
    smartprops_CSmartPropAttributeTraceNoHit m_nNoHitResult;
    CSmartPropAttributeBool m_bIgnoreToolMaterials;
    CSmartPropAttributeBool m_bIgnoreSky;
    CSmartPropAttributeBool m_bIgnoreNoDraw;
    CSmartPropAttributeBool m_bIgnoreTranslucent;
    CSmartPropAttributeBool m_bIgnoreModels;
    CSmartPropAttributeBool m_bIgnoreEntities;
    CSmartPropAttributeBool m_bIgnoreCables;
    CSmartPropAttributeVector m_TargetPoint;
    smartprops_CSmartPropAttributeCoordinateSpace m_TargetPointSpace;
    CSmartPropAttributeBool m_bTraceAway;
    CSmartPropAttributeFloat m_flTraceLength;
};
