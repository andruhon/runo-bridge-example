{
	"targets": [{
		"target_name": "addon",
		"sources": ["src/addon.cc" ],
        'include_dirs': [
          '.',
        ],
        "include_dirs" : [
	 			"<!(node -e \"require('nan')\")"
		],
		"conditions": [
			['OS=="linux"', {
				"libraries": [
					"<(module_root_dir)/target/release/libembed.so",
					"<(module_root_dir)/node_modules/runo-bridge/drop/target/release/libdrop.so"
				]
			}],
			['OS=="mac"', {
				"libraries": [
					"../target/release/libembed.dylib",
					"../node_modules/runo-bridge/drop/target/release/libdrop.dylib"
				]
			}],
			['OS=="win"', {
				"libraries": [
					"../target/release/embed.dll.lib",
					"../node_modules/runo-bridge/drop/target/release/drop.dll.lib"
				]
			}]
		]
	}]
}
