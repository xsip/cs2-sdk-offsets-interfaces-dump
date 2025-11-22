// generated - do not edit!

import {server_CModelPointEntity} from './CModelPointEntity';
// Class size: 0xA88
// BaseClass: : public CS2::server::CModelPointEntity
export const server_CPointWorldText  = {
	...server_CModelPointEntity,
	m_messageText: 2008n, // char m_messageText[512]; |  0x7d8 | Schema_FixedArray | Size: 0x200
	m_FontName: 2520n, // char m_FontName[64]; |  0x9d8 | Schema_FixedArray | Size: 0x40
	m_BackgroundMaterialName: 2584n, // char m_BackgroundMaterialName[64]; |  0xa18 | Schema_FixedArray | Size: 0x40
	m_bEnabled: 2648n, // bool m_bEnabled; |  0xa58 | Schema_Builtin | Size: 0x1
	m_bFullbright: 2649n, // bool m_bFullbright; |  0xa59 | Schema_Builtin | Size: 0x1
	m_flWorldUnitsPerPx: 2652n, // float32 m_flWorldUnitsPerPx; |  0xa5c | Schema_Builtin | Size: 0x4
	m_flFontSize: 2656n, // float32 m_flFontSize; |  0xa60 | Schema_Builtin | Size: 0x4
	m_flDepthOffset: 2660n, // float32 m_flDepthOffset; |  0xa64 | Schema_Builtin | Size: 0x4
	m_bDrawBackground: 2664n, // bool m_bDrawBackground; |  0xa68 | Schema_Builtin | Size: 0x1
	m_flBackgroundBorderWidth: 2668n, // float32 m_flBackgroundBorderWidth; |  0xa6c | Schema_Builtin | Size: 0x4
	m_flBackgroundBorderHeight: 2672n, // float32 m_flBackgroundBorderHeight; |  0xa70 | Schema_Builtin | Size: 0x4
	m_flBackgroundWorldToUV: 2676n, // float32 m_flBackgroundWorldToUV; |  0xa74 | Schema_Builtin | Size: 0x4
	m_Color: 2680n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_nJustifyHorizontal: 2684n, // client::PointWorldTextJustifyHorizontal_t  | Schema_DeclaredEnum | Size: 0x4
	m_nJustifyVertical: 2688n, // client::PointWorldTextJustifyVertical_t  | Schema_DeclaredEnum | Size: 0x4
	m_nReorientMode: 2692n, // client::PointWorldTextReorientMode_t  | Schema_DeclaredEnum | Size: 0x4
}
